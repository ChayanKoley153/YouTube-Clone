export const API_KEY = "AIzaSyBeM2AJyWnmDi84I3JmK2F_0fmezrNYI5s";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}