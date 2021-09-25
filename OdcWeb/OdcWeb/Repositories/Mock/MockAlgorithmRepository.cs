using OdcWeb.Models.Algoritm;
using OdcWeb.Repositories.Mock.Files;
using System.Collections.Generic;

namespace OdcWeb.Repositories.Mock
{
    public class MockAlgorithmRepository : AlgorithmRepository, IAlgorithmRepository
    {
        private FileReader FileReader { get; }

        public MockAlgorithmRepository(FileReader fileReader)
        {
            FileReader = fileReader;
        }
        public new string GetInputParams(string id)
        {
            var json = FileReader.ReadFile("InputParams1.json");
            var result = ClobResponce<string>(json);

            return result;
        }

        public new List<Algorithm> GetAllAlgorithms(string guid, string version)
        {
            var algorithmList = new List<Algorithm>();

            if (string.IsNullOrEmpty(guid))
            {
                algorithmList = new List<Algorithm>()
                {
                    new Algorithm()
                    {
                        Name = "First",
                        Guid = "9c7dd571-a4db-44cd-90da-73403c844184",
                        Description = "Первый алгоритм",
                        Version = "1.0"
                    },
                    new Algorithm()
                    {
                       Name = "Second",
                       Guid = "b66bebec-b912-4893-a8b0-ed9c7c3c39c9",
                       Description = "Второй алгоритм",
                       Version = "1.0"
                    },
                    new Algorithm()
                    {
                       Name = "Third",
                       Guid = "3f083020-d82c-4385-82c9-72762c6c4855",
                       Description = "Третий алгоритм",
                       Version = "3.0"
                    }
                    ,
                    new Algorithm()
                    {
                       Name = "Forth",
                       Guid = "aef480bd-45b3-4aa3-b0bb-826f2a0efab3",
                       Description = "Четвертый алгоритм",
                       Version = "1.2"
                    }
                };

                return algorithmList;
            }

            if (!string.IsNullOrEmpty(version))
            {
                throw new System.NotImplementedException();
            }

            throw new System.NotImplementedException();

        }
    }
}
