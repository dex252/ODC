using Newtonsoft.Json;

namespace OdcWeb.Models.Algoritm
{
    public class AttributeValue
    {
        [JsonProperty("Value")]
        public string Value { get; set; }

        [JsonProperty("Id")]
        public string Id { get; set; }

        [JsonProperty("Name")]
        public string Name { get; set; }

        [JsonProperty("Selected")]
        public bool Selected { get; set; }
    }
}
