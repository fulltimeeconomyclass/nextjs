const BASE_URL = 'http://cc21101-wordpress-boyv0.tw1.ru/wp-json/wp/v2';

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