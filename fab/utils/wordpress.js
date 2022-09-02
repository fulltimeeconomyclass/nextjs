const BASE_URL = 'http://cc21101-wordpress-boyv0.tw1.ru/wp-json/wp/v2';
const API_URL = 'http://cc21101-wordpress-boyv0.tw1.ru/graphql';

export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + '/events?_embed');
  const events = await eventsRes.json();
  return events;
}

export async function getEvent(slug) {
  const events = await getEvents();
  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    // case 'posts':
    //   elements = await getPosts();
    //   break;
    case 'events':
      elements = await getEvents();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}

// graphql API
async function fetchAPI(query = '', { variables }) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllMachines(preview) {
  const data = await fetchAPI(
    `
    query AllMachines {
      machines {
        edges {
          node {
            id
            title
            description
            photo {
              databaseId
              mediaItemUrl
              altText
              caption
              description
              mediaDetails {
                height
                width
                sizes {
                  file
                  fileSize
                  height
                  mimeType
                  name
                  sourceUrl
                  width
                }
              }
            }
            machineType {
            	edges {
                node {
                  id
                  title
                }
              }
            }
            address {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.machines
}


export async function getAllHumans(preview) {
  const data = await fetchAPI(
  `
  query AllHumans {
    humans {
      edges {
        node {
          id
          name
          position
          description
          photo {
            databaseId
            mediaItemUrl
            altText
            caption
            description
            mediaDetails {
              height
              width
              sizes {
                file
                fileSize
                height
                mimeType
                name
                sourceUrl
                width
              }
            }
          }
          workplace {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
  `,
  {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  }
  )

  return data?.humans
}

export async function getAllAddresses(preview) {
  const data = await fetchAPI(
  `
  query AllAddresses {
    addresses {
      edges {
        node {
          id
          name
          floor
          machines {
            edges {
              node {
                id
                title
              }
            }
          }
          humans {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
  `,
  {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  }
  )

  return data?.addresses
}


export async function getAllFaqs(preview) {
  const data = await fetchAPI(
  `
  query AllFaqs {
    faqs {
      edges {
        node {
          id
          question
          answer
        }
      }
    }
  }
  `,
  {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  }
  )

  return data?.faqs
}


export async function getAllTools(preview) {
  const data = await fetchAPI(
  `
  query AllTools {
    tools {
      edges {
        node {
          databaseId
          title
          code
          description
          quantity
          toolAddress {
            node {
              title
            }
          }
        }
      }
    }
  }
  `,
  {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  }
  )

  return data?.tools
}

