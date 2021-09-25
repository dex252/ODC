using Newtonsoft.Json;
using System.Collections.Generic;

namespace OdcWeb.Models.Algoritm
{
    public class InputParams
    {
        [JsonProperty("params")]
        public List<ParamsAttribute> Params { get; set; }
    }
}
