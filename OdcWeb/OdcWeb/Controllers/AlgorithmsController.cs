using Microsoft.AspNetCore.Mvc;
using OdcWeb.Enums;
using OdcWeb.Models;
using OdcWeb.Models.Algoritm;
using OdcWeb.Repositories;
using System.Collections.Generic;

namespace OdcWeb.Controllers
{
    public class AlgorithmsController : Controller
    {
        private IAlgorithmRepository AlgorithmsRepository { get; }
        public AlgorithmsController(IAlgorithmRepository algorithmsRepository)
        {
            AlgorithmsRepository = algorithmsRepository;
        }

        public IActionResult Index()
        {
            return View("~/Views/Algorithms/Index.cshtml");
        }

        [HttpGet]
        public IActionResult GetAlgorithms(string guid, string version)
        {
            var algorithms = AlgorithmsRepository.GetAllAlgorithms(guid, version);
            return new JsonResponse<List<Algorithm>>(MessageStatus.ok, "Готово", algorithms);
        }
    }
}
