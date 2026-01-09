"use client";

import React, { useMemo } from "react";

// ==========================================
// 1. CONFIG & TYPES
// ==========================================

const COLORS = {
  primary: "#2563eb",
  secondary: "#f59e0b",
  accent: "#f59e0b",
  neutral: "#64748b",
  background: "#ffffff",
  text: "#1e293b",
  textMuted: "#64748b",
  divider: "#e2e8f0",
  sectionBgAlt: "#f8fafc", // Світлий фон для секцій
};

export interface IPhoto {
  file_id: string;
  alt?: string;
  title?: string;
}

export interface IBlock {
  id: string;
  type_block: string;
  block_name: string;
  headline?: string;
  description?: string;
  description_secondary?: string;
  body_text?: string;
  text_left?: string;
  text_right?: string;
  list?: string;
  first_list?: string;
  last_list?: string;
  last_text?: string;
  styles?: string; // JSON string
  photo?: IPhoto;
  phone?: string;
  blogs?: any[]; // Для секції "You May Also Like"
}

interface LandingBuilderProps {
  data: IBlock[];
  env_photo_url: string;
  phone: string;
  post_date?: number;
  updated_date?: number;
  map_url?: string;
  showHours?: boolean;
  className?: string;
}

// Типи блоків (Enum аналог)
const BLOCK_TYPES = {
  MAIN_BLOCK: "main_block",
  BLOCK_WITH_IMAGE_LEFT: "block_with_image_left",
  YOU_MAY_ALSO_LIKE: "you_may_also_like",
  OUR_SERVICES: "our_services",
  ABOUT_US: "about_us",
  TWENTY_FOUR_HOUR: "twenty_four_hour",
  ABOUT_CITY: "about_city",
  TESTIMONIALS: "testimonials",
};

// ==========================================
// 2. HELPERS
// ==========================================

const getPostedDate = (post_date: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };
  return new Date(post_date * 1000).toLocaleDateString("en-US", options);
};

const formatPhoneNumberAsLink = (phoneNumber: string) => {
  return phoneNumber.replace(/[^+\d]/g, "");
};

const removeHtmlTags = (input: string): string => {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
};

// ==========================================
// 3. UI COMPONENTS (ATOMS)
// ==========================================

const TitleHOne = ({ headline }: { headline?: string }) => {
  if (!headline) return null;
  return (
    <div className="grid gap-5 mb-6 text-center">
      <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-[#1e293b]">
        {headline}
      </h2>
      <hr className="w-[100px] h-[2px] border-none bg-[#f59e0b] mx-auto" />
    </div>
  );
};

const NeedMoreInfoButton = ({ phone }: { phone: string }) => {
  return (
    <a
      href={"tel:" + formatPhoneNumberAsLink(phone)}
      className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-6 rounded-lg w-full max-w-4xl mx-auto my-6 group"
    >
      <span className="font-semibold text-lg text-[#64748b]">
        Need more information?
      </span>
      <span className="font-bold text-lg text-[#2563eb] underline group-hover:text-blue-700 transition-colors">
        Get a free quote
      </span>
    </a>
  );
};

const HtmlTextRenderer = ({
  text,
  className = "",
}: {
  text?: string;
  className?: string;
}) => {
  if (!text) return null;
  const paragraphs = text.trim().split("\n");

  return (
    <div className={`space-y-4 ${className}`}>
      {paragraphs.map((p, idx) => (
        <div
          key={idx}
          className="text-lg leading-relaxed text-[#1e293b]/90 text-justify [&>a]:text-[#2563eb] [&>a]:font-bold [&>a]:underline [&>h3]:font-bold [&>h3]:text-xl [&>h3]:mb-2"
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
    </div>
  );
};

const ListRenderer = ({
  list,
  isOrdered,
  columns = 1,
}: {
  list?: string;
  isOrdered?: boolean;
  columns?: number;
}) => {
  if (!list) return null;
  const items = list.split("\n").filter((i) => i.trim() !== "");

  const ListTag = isOrdered ? "ol" : "ul";
  const listStyle = isOrdered ? "list-decimal ml-5" : "list-none";

  // Tailwind columns style
  const colClass = columns > 1 ? `md:columns-${columns} gap-8` : "";

  return (
    <div className={`mt-4 mb-6 ${colClass}`}>
      <ListTag className={`${listStyle} space-y-3`}>
        {items.map((item, idx) => (
          <li key={idx} className="break-inside-avoid">
            <div className="flex gap-3 text-lg leading-relaxed text-[#1e293b]/90">
              {!isOrdered && (
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              )}
              <span
                className="[&>a]:text-[#2563eb] [&>a]:font-bold [&>a]:underline [&>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          </li>
        ))}
      </ListTag>
    </div>
  );
};

// ==========================================
// 4. COMPLEX BLOCKS
// ==========================================

// --- Main Block (Hero) ---
const MainBlock = ({
  data,
  env_photo_url,
  post_date,
  updated_date,
}: {
  data: IBlock;
  env_photo_url: string;
  post_date?: number;
  updated_date?: number;
}) => {
  const { headline, description, photo, phone } = data;

  const bgImage = photo?.file_id
    ? `url(${env_photo_url}${photo.file_id})`
    : undefined;

  const formattedPostDate = post_date ? getPostedDate(post_date) : null;
  const formattedUpdateDate = updated_date ? getPostedDate(updated_date) : null;

  // Show updated if > 24h difference
  const isUpdated =
    post_date && updated_date && updated_date - post_date > 24 * 60 * 60;

  return (
    <div className="w-full max-w-[1280px] mx-auto mt-10 mb-12">
      {/* Hero Background Area */}
      <div
        className="relative w-full min-h-[400px] md:min-h-[500px] bg-gray-900 rounded-xl overflow-hidden flex flex-col justify-end items-center pb-12 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: bgImage
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), ${bgImage}`
            : `linear-gradient(0deg, rgba(37, 99, 235, 0.9), rgba(30, 41, 59, 0.9))`,
        }}
      >
        <h1 className="text-white font-bold text-3xl md:text-5xl max-w-3xl mb-6 drop-shadow-md">
          {headline}
        </h1>
        <hr className="w-[100px] h-[3px] border-none bg-[#f59e0b] mb-6" />

        {phone && (
          <a
            href={`tel:${formatPhoneNumberAsLink(phone)}`}
            className="text-white font-bold text-2xl md:text-4xl hover:text-[#f59e0b] transition-colors drop-shadow-sm"
          >
            {phone}
          </a>
        )}

        {/* Dates */}
        <div className="absolute bottom-4 left-6 flex flex-col items-start gap-1 text-white/90 text-sm font-medium drop-shadow-md">
          {isUpdated && formattedUpdateDate && (
            <span>Updated: {formattedUpdateDate}</span>
          )}
          {formattedPostDate && <span>Published: {formattedPostDate}</span>}
        </div>
      </div>

      {/* Hero Description */}
      {description && (
        <div className="max-w-[1150px] mx-auto px-4 pt-10">
          <HtmlTextRenderer text={description} />
        </div>
      )}
    </div>
  );
};

// --- Content Block (Text + Image) ---
const TextBlockWithRightImg = ({
  data,
  env_photo_url,
  phone,
}: {
  data: IBlock;
  env_photo_url: string;
  phone: string;
}) => {
  // Parse styles JSON safely
  const styles = useMemo(() => {
    try {
      return data.styles ? JSON.parse(data.styles) : {};
    } catch {
      return {};
    }
  }, [data.styles]);

  const imageUrl = data.photo?.file_id
    ? `${env_photo_url}${data.photo.file_id}`
    : null;

  // Layout Logic
  const isBgExists = styles.background_exists;
  const isImageLeft = styles.body_grid_revers; // Using this property to toggle L/R

  return (
    <div
      id={data.block_name}
      className={`py-12 ${isBgExists ? "bg-[#f8fafc]" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 max-w-[1150px]">
        {/* Top Button */}
        {styles.add_top_need_more_info_button && (
          <NeedMoreInfoButton phone={phone} />
        )}

        {/* Title */}
        <TitleHOne headline={data.headline} />

        {/* First Section (Text + List) */}
        <div className="mb-8">
          <HtmlTextRenderer text={data.description} />
          <ListRenderer
            list={data.first_list}
            columns={styles.first_list_grid_quantity_columns}
            isOrdered={styles.first_list_number_list}
          />
        </div>

        {/* Main Body (Image + Text + List) */}
        <div
          className={`flex flex-col gap-8 ${
            isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Main Text Content */}
          <div className="flex-1">
            <HtmlTextRenderer text={data.body_text} />
            <ListRenderer
              list={data.list}
              columns={styles.main_list_grid_quantity_columns}
              isOrdered={styles.main_list_number_list}
            />
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="w-full lg:w-[45%] flex-shrink-0">
              <img
                src={imageUrl}
                alt={data.photo?.alt || "Section image"}
                title={data.photo?.title}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Last Section */}
        {(data.last_text || data.last_list) && (
          <div className="mt-8">
            <HtmlTextRenderer text={data.last_text} />
            <ListRenderer
              list={data.last_list}
              columns={styles.last_list_grid_quantity_columns}
              isOrdered={styles.last_list_number_list}
            />
          </div>
        )}

        {/* Secondary Description (Bottom) */}
        {data.description_secondary && (
          <div className="mt-8">
            <HtmlTextRenderer text={data.description_secondary} />
          </div>
        )}

        {/* Bottom Button */}
        {styles.add_bottom_need_more_info_button && (
          <NeedMoreInfoButton phone={phone} />
        )}
      </div>
    </div>
  );
};

// --- You May Also Like (Blog Cards) ---
const BlogCard = ({
  data,
  env_photo_url,
}: {
  data: any;
  env_photo_url: string;
}) => {
  const imageUrl = data.preview?.photo?.file_id
    ? `${env_photo_url}${data.preview.photo.file_id}`
    : null;

  return (
    <a
      href={`/blog/${data.meta_info?.url}/`}
      className="block h-full bg-white border border-[#e2e8f0] rounded-lg overflow-hidden hover:shadow-lg hover:border-[#2563eb]/30 transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={data.preview?.headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-3 text-[#1e293b] line-clamp-2">
          {data.preview?.headline}
        </h3>
        <p className="text-[#64748b] text-base leading-relaxed line-clamp-3">
          {removeHtmlTags(data.preview?.description || "")}
        </p>
        <span className="mt-auto pt-4 text-[#2563eb] font-semibold text-sm">
          Read Article &rarr;
        </span>
      </div>
    </a>
  );
};

const YouMayAlsoLike = ({
  data,
  env_photo_url,
}: {
  data: IBlock;
  env_photo_url: string;
}) => {
  if (!data.blogs || data.blogs.length === 0) return null;

  return (
    <div id={data.block_name} className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
            {data.headline || "You May Also Like"}
          </h2>
          <hr className="w-[100px] h-[2px] border-none bg-[#f59e0b] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.blogs.map((blog, idx) => (
            <BlogCard key={idx} data={blog} env_photo_url={env_photo_url} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Mock Components for missing ones ---
const AboutUs = ({ data }: { data: IBlock }) => (
  <div className="py-10 text-center container mx-auto">
    <TitleHOne headline={data.headline} />
    <HtmlTextRenderer text={data.description} className="max-w-4xl mx-auto" />
  </div>
);

const AboutCity = ({ data }: { data: IBlock }) => (
  <div className="py-10 bg-[#f8fafc]">
    <div className="container mx-auto px-4">
      <TitleHOne headline={data.headline} />
      <HtmlTextRenderer text={data.description} className="max-w-4xl mx-auto" />
    </div>
  </div>
);

const HourService = ({ data, phone }: { data: IBlock; phone: string }) => (
  <div className="py-16 bg-[#1e293b] text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">{data.headline}</h2>
      <div
        className="text-gray-300 max-w-3xl mx-auto mb-8"
        dangerouslySetInnerHTML={{ __html: data.description || "" }}
      />
      <a
        href={`tel:${formatPhoneNumberAsLink(phone)}`}
        className="inline-block bg-[#f59e0b] text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors"
      >
        Call Now: {phone}
      </a>
    </div>
  </div>
);

// Map Component Mock (Since original code was not provided fully)
const MapMock = ({
  mapLink,
  showHours,
}: {
  mapLink?: string;
  showHours?: boolean;
}) => {
  if (!mapLink) return null;
  return (
    <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
      <iframe
        src={mapLink}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

// ==========================================
// 5. MAIN BUILDER
// ==========================================

export const LandingBuilder = ({
  phone,
  data,
  env_photo_url,
  map_url,
  post_date,
  updated_date,
  className = "",
  showHours,
}: LandingBuilderProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div className={`flex flex-col ${className}`}>
      {data.map((block) => {
        const key = block.id || Math.random().toString();

        switch (block.type_block) {
          case BLOCK_TYPES.MAIN_BLOCK:
            return (
              <MainBlock
                key={key}
                data={block}
                env_photo_url={env_photo_url}
                post_date={post_date}
                updated_date={updated_date}
              />
            );

          case BLOCK_TYPES.BLOCK_WITH_IMAGE_LEFT:
          case BLOCK_TYPES.OUR_SERVICES:
            return (
              <TextBlockWithRightImg
                key={key}
                data={block}
                phone={phone}
                env_photo_url={env_photo_url}
              />
            );

          case BLOCK_TYPES.YOU_MAY_ALSO_LIKE:
            return (
              <YouMayAlsoLike
                key={key}
                data={block}
                env_photo_url={env_photo_url}
              />
            );

          //   case BLOCK_TYPES.ABOUT_US:
          //     return <AboutUs key={key} data={block} />;

          //   case BLOCK_TYPES.ABOUT_CITY:
          //     return <AboutCity key={key} data={block} />;

          //   case BLOCK_TYPES.TWENTY_FOUR_HOUR:
          //     return <HourService key={key} data={block} phone={phone} />;

          case BLOCK_TYPES.TESTIMONIALS:
            // Placeholder if logic needs children pass-through
            return null;

          default:
            return null;
        }
      })}

      {map_url && <MapMock mapLink={map_url} showHours={showHours} />}
    </div>
  );
};

export default LandingBuilder;
