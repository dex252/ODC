using Newtonsoft.Json;

namespace OdcWeb.Repositories
{
    public class BaseRepository
    {
        protected T ClobResponce<T>(string json)
        {
            var obj = JsonConvert.DeserializeObject<T>(json);

            return obj;
        }
    }
}
