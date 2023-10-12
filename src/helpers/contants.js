export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.047182',
      bl_lng: '24.992627',
      tr_lat: '42.705437',
      tr_lng: '44.549525',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'f93d2bdc20msh8e16de7b45efc07p19968djsn2ff706518bf5',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const detailOptions = {
    headers: {
      'X-RapidAPI-Key': 'f93d2bdc20msh8e16de7b45efc07p19968djsn2ff706518bf5',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  