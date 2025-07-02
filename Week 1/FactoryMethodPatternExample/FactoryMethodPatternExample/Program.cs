public interface IDocument
{
    void Open();
    void Close();
    void Save();
}

public class WordDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening Word document...");
    public void Close() => Console.WriteLine("Closing Word document...");
    public void Save() => Console.WriteLine("Saving Word document...");
}

public class PdfDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening PDF document...");
    public void Close() => Console.WriteLine("Closing PDF document...");
    public void Save() => Console.WriteLine("Saving PDF document...");
}

public class ExcelDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening Excel document...");
    public void Close() => Console.WriteLine("Closing Excel document...");
    public void Save() => Console.WriteLine("Saving Excel document...");
}

public abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();

    public void ManageDocument()
    {
        IDocument doc = CreateDocument();
        doc.Open();
        doc.Save();
        doc.Close();
    }
}

public class WordDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new WordDocument();
    }
}

public class PdfDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new PdfDocument();
    }
}

public class ExcelDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new ExcelDocument();
    }
}

class Program
{
    static void Main(string[] args)
    {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Console.WriteLine("Client: Using the WordDocumentFactory.");
        wordFactory.ManageDocument();

        Console.WriteLine();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Console.WriteLine("Client: Using the PdfDocumentFactory.");
        pdfFactory.ManageDocument();

        Console.WriteLine();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Console.WriteLine("Client: Using the ExcelDocumentFactory.");
        excelFactory.ManageDocument();
    }
}
