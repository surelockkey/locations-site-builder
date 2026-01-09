interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export async function graphqlFetch<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const apiUrl = process.env.GRAPHQL_API_URL || 'https://dev-api-crm.tech-slk.com/graphql';

  try {
    const requestBody = JSON.stringify({
      query,
      variables,
    });

    console.log('[GraphQL] Request URL:', apiUrl);
    console.log('[GraphQL] Request body:', requestBody);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const responseText = await response.text();
    console.log('[GraphQL] Response status:', response.status);
    console.log('[GraphQL] Response body:', responseText);

    if (!response.ok) {
      console.error('[GraphQL] Request failed with status:', response.status);
      console.error('[GraphQL] Response:', responseText);
      throw new Error(`GraphQL request failed: ${response.status} - ${responseText}`);
    }

    const json: GraphQLResponse<T> = JSON.parse(responseText);

    if (json.errors) {
      console.error('[GraphQL] GraphQL Errors:', json.errors);
      throw new Error(json.errors[0]?.message || 'GraphQL query failed');
    }

    if (!json.data) {
      throw new Error('No data returned from GraphQL query');
    }

    return json.data;
  } catch (error) {
    console.error('[GraphQL] Fetch error:', error);
    throw error;
  }
}
