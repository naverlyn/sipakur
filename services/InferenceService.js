export default class ManInferenceService
{
    static manInferenceCalculator(tinggi, dada)
    {
        if ((tinggi >= 166 && tinggi <= 170) && (dada >= 86 && dada <= 90)) return 44;
        if ((tinggi >= 168 && tinggi <= 173) && (dada >= 90 && dada <= 93)) return 46;
        if ((tinggi >= 171 && tinggi <= 176) && (dada >= 94 && dada <= 97)) return 48;
        if ((tinggi >= 174 && tinggi <= 179) && (dada >= 98 && dada <= 101)) return 50;
        if ((tinggi >= 177 && tinggi <= 182) && (dada >= 102 && dada <= 105)) return 52;
        if ((tinggi >= 180 && tinggi <= 184) && (dada >= 106 && dada <= 109)) return 54;
        if ((tinggi >= 182 && tinggi <= 186) && (dada >= 110 && dada <= 113)) return 56;
        if ((tinggi >= 184 && tinggi <= 188) && (dada >= 114 && dada <= 117)) return 58;
        return 0;
    };

    static manSizeCalculator(inference)
    {
        if(inference >= 44 && inference <= 46) return "S";
        if(inference >= 48 && inference <= 50) return "M";
        if(inference >= 52 && inference <= 54) return "L";
        if(inference >= 56 && inference <= 58) return "XL";
        return "Tidak ada";
    };

    static womanInferenceCalculator(dada, pinggang)
    {
        if ((dada >= 74 && dada <= 77) && (pinggang >= 60 && pinggang <= 62)) return 32;
        if ((dada >= 78 && dada <= 81) && (pinggang >= 63 && pinggang <= 65)) return 34;
        if ((dada >= 82 && dada <= 85) && (pinggang >= 66 && pinggang <= 69)) return 36;
        if ((dada >= 86 && dada <= 89) && (pinggang >= 70 && pinggang <= 73)) return 38;
        if ((dada >= 90 && dada <= 93) && (pinggang >= 74 && pinggang <= 77)) return 40;
        if ((dada >= 94 && dada <= 97) && (pinggang >= 78 && pinggang <= 81)) return 42;
        if ((dada >= 98 && dada <= 102) && (pinggang >= 82 && pinggang <= 86)) return 44;
        if ((dada >= 103 && dada <= 107) && (pinggang >= 87 && pinggang <= 91)) return 46;
        if ((dada >= 108 && dada <= 113) && (pinggang >= 92 && pinggang <= 96)) return 48;
        if ((dada >= 114 && dada <= 119) && (pinggang >= 97 && pinggang <= 102)) return 50;
        return 0;
    };

    static womanSizeCalculator(inference)
    {
        if(inference >= 32 && inference <= 34) return "XS";
        if(inference >= 36 && inference <= 38) return "S";
        if(inference >= 40 && inference <= 42) return "M";
        if(inference >= 44 && inference <= 46) return "L";
        if(inference >= 48 && inference <= 50) return "XL";
        return "Tidak ada";
    };
}
