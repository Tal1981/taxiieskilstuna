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
                        disableMobile: true, // منع عمل التقويم الخاص في جهاز الموبايل
                    }}
                    name="date"
                    required
                    className="bg-transparent w-full h-full border-0  p-2 z-10 rounded focus:outline-none     block py-2.5 px-1 border-b-2 border-gray-300 appearance-none focus:ring-0 focus:border-blue-600 peer active:outline-0"
                />    
    );
};

export default FlatpickrComp;