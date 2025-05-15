import '@testing-library/jest-dom';

import Light from '../ts/basicSettings';


describe('Light class', () => {
    let light: Light;

    beforeEach(() => {
        light = new Light();
    });

    it('should toggle light switch on', () => {
        const mockLightSwitchElement = document.createElement('img');
        light.lightSwitchOn(mockLightSwitchElement);
        expect(mockLightSwitchElement.attributes.getNamedItem('src')?.value).toBe('./assets/svgs/light_bulb.svg');
    })

    it('should toggle light switch off', () => {
        const mockLightSwitchElement = document.createElement('img');
        light.lightSwitchOff(mockLightSwitchElement);
        expect(mockLightSwitchElement.attributes.getNamedItem('src')?.value).toBe('./assets/svgs/light_bulb_off.svg');
    });

    it('should get the selected component name', () => {
        const mockParentElement = document.createElement('div');
        const mocChildElement = document.createElement('p');
        mocChildElement.textContent = 'guest room';
        mockParentElement.appendChild(mocChildElement);
        mockParentElement.setAttribute('class', 'rooms guest_room');
        const result = light.getSelectedComponentName(mocChildElement);
        expect(result).toEqual('guest room');
    });

})

