// Reference: https://flaviocopes.com/nextjs-serialize-date-json/
export const safeJson = (data) => {
    return JSON.parse(JSON.stringify(data));
  }
  
  export const formatDate = (date) => {

    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  }