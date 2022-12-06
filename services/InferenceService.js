export default class ManInferenceService
{
    static manInferenceCalculator(tinggi, dada)
    {
        if ((tinggi >= 166 && tinggi <= 170) && (dada >= 48 && dada <= 52)) return 44;
        if ((tinggi >= 168 && tinggi <= 173) && (dada >= 53 && dada <= 58)) return 48;
        if ((tinggi >= 174 && tinggi <= 179) && (dada >= 59 && dada <= 64)) return 52;
        if ((tinggi >= 177 && tinggi <= 182) && (dada >= 65 && dada <= 71)) return 56;
        if ((tinggi >= 180 && tinggi <= 184) && (dada >= 72 && dada <= 75)) return 60;
        if ((tinggi >= 185 && tinggi <= 190) && (dada >= 76 && dada <= 80)) return 63;
        return 0;
    };

    static manSizeCalculator(inference)
    {
        if(inference >= 44 && inference <= 46) return "S";
        if(inference >= 48 && inference <= 50) return "M";
        if(inference >= 52 && inference <= 54) return "L";
        if(inference >= 56 && inference <= 58) return "XL";
        if(inference >= 60 && inference <= 62) return "XXL";  
        if(inference > 63)
         return "XXXL";      
        return "Tidak ada";
    };

    static womanInferenceCalculator(dada, pinggang)
    {
        if ((dada >= 82 && dada <= 86) && (pinggang >= 59 && pinggang <= 63)) return 36;
        if ((dada >= 86 && dada <= 90) && (pinggang >= 63 && pinggang <= 67)) return 38;
        if ((dada >= 90 && dada <= 94) && (pinggang >= 67 && pinggang <= 71)) return 40;
        if ((dada >= 94 && dada <= 98) && (pinggang >= 71 && pinggang <= 75)) return 42;
        if ((dada >= 102 && dada <= 106) && (pinggang >= 79 && pinggang <= 83)) return 46;
        if  ((dada > 106) && (pinggang > 83)) return 51;
        return 0;
    };

    static womanSizeCalculator(inference)
    {
        if(inference >= 36 && inference <= 38) return "S";
        if(inference >= 38 && inference <= 40) return "M";
        if(inference >= 40 && inference <= 42) return "L";
        if(inference >= 42 && inference <= 44) return "Xl";
        if(inference >= 46 && inference <= 50) return "XXL";
        if(inference > 51) return "XXXL";
        return "Tidak ada";
    };
}
