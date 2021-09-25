using OdcWeb.Models.Algoritm;
using System;
using System.Collections.Generic;

namespace OdcWeb.Repositories
{
    public class AlgorithmRepository : BaseRepository, IAlgorithmRepository
    {
        public List<Algorithm> GetAllAlgorithms(string guid, string version)
        {
            throw new NotImplementedException();
        }

        public string GetInputParams(string id)
        {
            throw new NotImplementedException();
        }
    }
}
