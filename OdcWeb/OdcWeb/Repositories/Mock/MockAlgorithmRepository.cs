using OdcWeb.Repositories.Mock.Files;

namespace OdcWeb.Repositories.Mock
{
    public class MockAlgorithmRepository: AlgorithmRepository
    {
        private FileReader FileReader { get; }

        public MockAlgorithmRepository(FileReader fileReader)
        {
            FileReader = fileReader;
        }
        public new string GetInputParams(decimal id)
        {
            var json = FileReader.ReadFile("InputParams1.json");
            var result = ClobResponce<string>(json);

            return result;
        }
    }
}
