public sealed class Logger
{
    private static Logger _instance = null;

    private Logger()
    {
        Console.WriteLine("Logger instance created.");
    }

    public static Logger GetInstance()
    {
        if (_instance == null)
        {
            _instance = new Logger();
        }
        return _instance;
    }

    public void Log(string message)
    {
        Console.WriteLine($"Log message: {message}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        Logger logger2 = Logger.GetInstance();

        logger1.Log("First message.");
        logger2.Log("Second message.");

        if (logger1 == logger2)
        {
            Console.WriteLine("Both variables hold the same instance. Singleton pattern works!");
        }
        else
        {
            Console.WriteLine("Singleton pattern failed.");
        }
    }
}
