import {Button, Form} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import baseRequest from "../requests/requests";


const Step3Page = () => {
  const [fill, setFill] = useState([])
  const [options, setOptions] = useState([])
  const [suggestion, setSuggestion] = useState(1)

  useEffect(() => {
    (async () => {
      const res = await baseRequest('/getFill')
      const res2 = await baseRequest('/getSuggestion')
      setSuggestion(res2.data)

      setOptions(res.data)
    })()
  }, [fill])
  return (
    <Form id="fillForm">
      <Form.Group controlId="fillFormGroup">
        <Form.Label>Selecione o recheio</Form.Label>
        <Form.Control as="select" multiple onChange={onChange(setFill)}>
          {Array.isArray(options) && options.map((item, index) => <option value={index} key={index}>{item}</option>)}
        </Form.Control>
        <Button onClick={() => baseRequest("/getPoints").then(({data}) => alert(data))}>Recomendação do
          Milenio: {options[suggestion]}</Button>
        <Button type={"submit"}>SUBMIT</Button>
      </Form.Group>
    </Form>
  )
}
export default Step3Page

const onChange = (callback) => (event) => {
  const options = event.target.options;
  let value = [];
  for (let i = 0, l = options.length; i < l; i++) {
    if (options[i].selected) {
      value.push(options[i].value);
    }
  }
  callback(value)
}
