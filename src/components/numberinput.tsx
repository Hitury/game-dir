import {NumberInput} from "@heroui/react";

function numberInput() {
    return(
        <NumberInput className="w-[300px]"
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="currency">
                    Currency
                  </label>
                  <select
                    aria-label="Select currency"
                    className="outline-solid outline-transparent border-0 bg-transparent text-default-400 text-small"
                    defaultValue="EUR"
                    id="currency"
                    name="currency"
                  >
                  <option aria-label="US Dollar" value="USD">
                    USD
                  </option>
                  <option aria-label="Japanese Yen" value="YEN">
                    YEN
                  </option>
                  <option aria-label="Euro" value="EUR">
                    EUR
                  </option>
                </select>
              </div>
              }
            label="Price"
            placeholder="0.00"
            />
    )
}

export default numberInput;