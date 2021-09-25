using OdcWeb.Models.Algoritm;
using System.Collections.Generic;

namespace OdcWeb.Repositories
{
    public interface IAlgorithmRepository
    {
        List<Algorithm> GetAllAlgorithms(string guid = null, string version = null);
        string GetInputParams(string id);
    }
}
