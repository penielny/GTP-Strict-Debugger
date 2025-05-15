import AdvanceSettings from './../ts/advanceSettings';

describe('AdvanceSettings Class', () => {

    let advanceSettings: AdvanceSettings;

    beforeEach(() => {
        advanceSettings = new AdvanceSettings();
    })

    it('should diplay customization modal', () => {
        const element = document.createElement('div');
        element.className = 'customization';
        const parentElement = document.createElement('div');
        parentElement.className = 'customization-details';
        element.appendChild(parentElement);

        advanceSettings.displayCustomization(element);

        expect(parentElement.classList.contains('hidden')).toBe(true);
    });

    it("should cap first letter of the string", () => {
        const str = "hello world";
        const result = advanceSettings.capFirstLetter(str);
        expect(result).toBe("Hello world");

    })

    it("should format time string aan", () => {
        const time = "12:00";
        const result = advanceSettings.formatTime(time);
        const [hour, min] = time.split(':');
        const dailyAlarmTime = new Date();
        dailyAlarmTime.setHours(parseInt(hour));
        dailyAlarmTime.setMinutes(parseInt(min));
        dailyAlarmTime.setSeconds(0);

        expect(result).toEqual(dailyAlarmTime);

    })

    it("should return time difference", () => {
        const time = "12:00";
        const result = advanceSettings.timeDifference(time);
        const now = new Date();
        const setTime = advanceSettings.formatTime(time).getTime() - now.getTime();
        expect(result).toEqual(setTime);
    })


})