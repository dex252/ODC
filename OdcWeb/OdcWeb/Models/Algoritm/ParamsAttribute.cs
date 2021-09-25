using Newtonsoft.Json;
using OdcWeb.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OdcWeb.Models.Algoritm
{
    public class ParamsAttribute
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("value")]
        public AttributeValue Value { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("type")]
        public ParamsAttributeType Type { get; set; }

        [JsonProperty("select")]
        public List<AttributeValue> SelectList { get; set; }
    }
}
