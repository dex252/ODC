using Newtonsoft.Json;

namespace OdcWeb.Models.Algoritm
{
    public class AttributeValue
    {
        [JsonProperty("value")]
        public string Value { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }
    }
}
