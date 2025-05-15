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

        let htmlString = `
            <div class="rooms bedroom">
                <img src="./assets/imgs/bedroom.jpg" alt="image of a bedroom">
                <p>bedroom</p>
                <div class="basic_settings">
                    <section class="slider">
                        <input type="range" name="light intensity" id="light_intensity" value="0" min="0" max="10">
                    </section>
                    <section class="basic_settings_buttons">
                        <button class="light-switch">
                            <img src="./assets/svgs/light_bulb_off.svg" data-lightOn="./assets/svgs/light_bulb.svg" alt="fullscreen button svg icon">
                        </button>

                        <button class="advance-settings_modal">
                            <img src="./assets/svgs/enlarge.svg" alt="fullscreen button svg icon">
                        </button>

                    </section>
                </div>
            </div>
            `;
        const mockParentElement = document.createElement('div');
        const mocChildElement = document.createElement('p');
        mocChildElement.textContent = 'guest room';
        mockParentElement.appendChild(mocChildElement);
        mockParentElement.setAttribute('class', 'rooms guest_room');
        const result = light.getSelectedComponentName(mocChildElement);
        expect(result).toEqual('guest room');
    });

})

