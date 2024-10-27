import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_blue.css';

// ¨**[ Middleware for adding calender in the form ]**¨
const FlatpickrComp: React.FC = () => {
    const [dateTime, setDateTime] = useState<Date | undefined>(undefined);

    return (
                <Flatpickr
                    id="datetime"
                    value={dateTime}
                    onChange={([date]) => setDateTime(date)}
                    options={{
                        dateFormat: "Y-m-d H:i", // تنسيق التاريخ والوقت
                        enableTime: true, // تفعيل اختيار الوقت
                        time_24hr: true, // استخدام تنسيق 24 ساعة
                        minuteIncrement: 1, // زيادة الدقائق
                        minDate: new Date(), // منع اختيار وقت ماضي
                    }}
                    name="date"
                    required
                    // className="absolute top-0 left-0 w-full p-2 border text-black z-10 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    className="focus:outline-0"
                    style={{background:"transparent",width:"100%",height:"100%",borderWidth:"0"}}
                />    
    );
};

export default FlatpickrComp;