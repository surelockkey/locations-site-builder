export const sendManageSitesHtmlEmail = `
  mutation SendManageSitesHtmlEmail($to: String!, $subject: String!, $html: String!) {
    sendManageSitesHtmlEmail(to: $to, subject: $subject, html: $html)
  }
`;
