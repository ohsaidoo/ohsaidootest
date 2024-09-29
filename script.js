document.getElementById('searchButton').addEventListener('click', function() {
    const model = document.getElementById('printerModel').value.trim();

    if (model === "") {
        alert('يرجى إدخال رقم موديل الطابعة');
        return;
    }

    // استدعاء دالة لجلب بيانات الطابعة
    fetchPrinterDetails(model);
});

document.getElementById('reloadButton').addEventListener('click', function() {
    document.getElementById('printerModel').value = '';
    document.getElementById('printerDetails').style.display = 'none';
    resetPrinterDetails();
});

// بيانات محلية للطابعات (يمكنك استبدالها بملف JSON)
const printersData = [
    {
        "model": "HP DeskJet Ink Advantage Ultra 4927",
        "name": "HP DeskJet Ink Advantage Ultra 4927",
        "inkType": "حبر نفاث",
        "pages": "2600 black / 1400 color",
        "printSpeedBlack": "7.5 ورقة بالدقيقة (ISO)",
        "printSpeedColor": "5.5 ورقة بالدقيقة (ISO)",
        "monthlyDutyCycle": "1000 ورقة شهرياً",
        "recommendedMonthlyVolume": "من 50 إلى 100 ورقة",
        "scanResolution": "1200 نقطة في البوصة",
        "blackPrintQuality": "1200 × 1200 نقطة في البوصة",
        "colorPrintQuality": "4800 × 1200 نقطة في البوصة",
        "mobilePrinting": "Apple AirPrint، Mopria Print Service، تطبيق HP",
        "paperInputTray": "60 ورقة",
        "paperOutputTray": "25 ورقة",
        "mediaTypes": "ورق عادي، ورق صور، ورق كتيبات، أظرف، ورق نفث الحبر المتخصص",
        "inkNumber": "47",
        "includedCartridgesBlack": "2 خراطيش سوداء بإجمالي 2600 ورقة",
        "includedCartridgesColor": "2 خراطيش ملونة بإجمالي 1400 ورقة",
        "replacementCartridgeBlack": "خراطيش سوداء بديلة لـ 1300 ورقة",
        "replacementCartridgeColor": "خراطيش ملونة بديلة لـ 700 ورقة",
        "warranty": "سنتان",
        "image": "https://example.com/printer1.jpg"
    },
   
];

function fetchPrinterDetails(model) {
    // البحث عن الطابعة بالاعتماد على رقم الموديل
    const printer = printersData.find(p => p.model === model);
    if (printer) {
        displayPrinterDetails(printer);
    } else {
        alert('لم يتم العثور على طابعة بهذا الموديل.');
    }
}

function displayPrinterDetails(data) {
    document.getElementById('printerDetails').style.display = 'block';
    document.getElementById('printerName').querySelector('span').textContent = data.name;
    document.getElementById('printerInkType').querySelector('span').textContent = data.inkType;
    document.getElementById('printerPages').querySelector('span').textContent = data.pages;

    // إضافة تفاصيل الطابعة المتبقية
    const detailsContainer = document.getElementById('printerDetails');
    
    const details = [
        { label: "سرعة الطباعة باللون الأسود (ISO)", value: data.printSpeedBlack },
        { label: "سرعة الطباعة بالألوان (ISO)", value: data.printSpeedColor },
        { label: "دورة العمل الشهرية", value: data.monthlyDutyCycle },
        { label: "الموصى به شهرياً", value: data.recommendedMonthlyVolume },
        { label: "دقة الماسح الضوئي", value: data.scanResolution },
        { label: "جودة الطباعة باللون الأسود (الأفضل)", value: data.blackPrintQuality },
        { label: "جودة الطباعة بالألوان (الأفضل)", value: data.colorPrintQuality },
        { label: "إمكانية الطباعة عبر الهاتف المحمول", value: data.mobilePrinting },
        { label: "درج إدخال الورق", value: data.paperInputTray },
        { label: "درج إخراج الورق", value: data.paperOutputTray },
        { label: "أنواع الوسائط", value: data.mediaTypes },
        { label: "رقم الحبر", value: data.inkNumber },
        { label: "الخراطيش المرفقة (أسود)", value: data.includedCartridgesBlack },
        { label: "الخراطيش المرفقة (ألوان)", value: data.includedCartridgesColor },
        { label: "الخراطيش البديلة (أسود)", value: data.replacementCartridgeBlack },
        { label: "الخراطيش البديلة (ألوان)", value: data.replacementCartridgeColor },
        { label: "الضمان", value: data.warranty }
    ];

    details.forEach(detail => {
        if (detail.value) {
            const p = document.createElement('p');
            p.textContent = `${detail.label}: ${detail.value}`;
            detailsContainer.appendChild(p);
        }
    });

    document.getElementById('printerImage').src = data.image;
}

function resetPrinterDetails() {
    document.getElementById('printerName').querySelector('span').textContent = '';
    document.getElementById('printerInkType').querySelector('span').textContent = '';
    document.getElementById('printerPages').querySelector('span').textContent = '';
    document.getElementById('printerImage').src = '';
    document.getElementById('printerDetails').innerHTML = ''; // لإعادة تعيين الحقول الإضافية
}
