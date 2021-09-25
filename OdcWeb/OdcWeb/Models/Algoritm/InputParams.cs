using Newtonsoft.Json;
using System.Collections.Generic;

namespace OdcWeb.Models.Algoritm
{
    public class InputParams
    {
        [JsonProperty("Params")]
        public List<ParamsAttribute> Params { get; set; }
    }
}
