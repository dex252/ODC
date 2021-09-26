using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using OdcWeb.Enums;
using System.Collections.Generic;

namespace OdcWeb.Models.Algoritm
{
    public class ParamsAttribute
    {
        [JsonProperty("Name")]
        public string Name { get; set; }

        [JsonProperty("Value")]
        public AttributeValue Value { get; set; }

        [JsonProperty("Id")]
        public string Id { get; set; }

        [JsonProperty("Type")]
        [JsonConverter(typeof(StringEnumConverter))]
        public ParamsAttributeType Type { get; set; }

        [JsonProperty("Select")]
        public List<AttributeValue> SelectList { get; set; }
    }
}
