public class DataType {

	public static void main(String[] args)
	{
		// byte....size is 1 byte
		
		byte byteMax = 127;
		byte byteMin = -128;
		System.out.println(byteMin);
		System.out.println(byteMax);
		
		
		// short....size is 2 byte
		
		short shortMax = 32767;
		short shortMin = -32768;
		System.out.println("Min range of short is "+ shortMin + " Max value of short is "+ shortMax);
		
		// int....size is 4 byte
		
		int maxInt = 2147483647;
        int minInt = -2147483648;
        System.out.println(maxInt);
		System.out.println(minInt);
        
        // long...size is 8 byte
        
        long maxLong = 9223372036854775807L;
        long minLong = -9223372036854775808L;
        System.out.println(maxLong);
		System.out.println(minLong);

        //float...size is 4 byte
        
        float f = 3234.34222222f;
        System.out.println("Float: " + f);

        // double.....size is 8 byte
        
        double d = 3443343.5544545d;
        System.out.println("double: " + d);
        
        // boolean....size is 1 byte
        
        boolean bool = true;
        System.out.println(bool);
        		
        
        // char...size is 2 byte
        // assigning single character literal
        
        char ch = 'a';
        
        // assigning number to char
         
        char ch1 = 65;
        System.out.println(ch1);
        
        // assigning unicode to char
        char var1 = '\u00A7';
        System.out.println(var1);   
	}
}