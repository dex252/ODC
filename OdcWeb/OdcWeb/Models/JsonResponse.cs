using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OdcWeb.Enums;

namespace OdcWeb.Models
{
    public sealed class JsonResponse<T> : ContentResult
        where T : class
    {
        public JsonResponse(MessageStatus status, string message, string requestId = null, T content = null)
        {
            var response = new
            {
                Status = status,
                Message = message,
                Data = content,
                RequestId = requestId
            };

            Content = JsonConvert.SerializeObject(response);
            ContentType = "application/json";
        }
    }
}