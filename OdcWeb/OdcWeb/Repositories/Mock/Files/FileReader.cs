using System;
using System.IO;
using System.Linq;
using System.Reflection;

namespace OdcWeb.Repositories.Mock.Files
{
    public class FileReader
    {
        private Assembly Assembly { get; }
        private string[] AssemblyNames{get;}

        public FileReader()
        {
            Assembly = Assembly.GetExecutingAssembly();
            AssemblyNames = Assembly.GetManifestResourceNames();
        }

        public string ReadFile(string fileName)
        {
            var assemblyName = AssemblyNames.FirstOrDefault(e => e.EndsWith(fileName));
            if(assemblyName == null)
            {
                throw new Exception($"Файл {fileName} не найден.");
            }

            using (var stream = Assembly.GetManifestResourceStream(assemblyName))
            using (var reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                return result;
            }
        }
    }
}
