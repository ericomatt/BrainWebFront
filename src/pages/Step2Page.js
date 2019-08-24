import {Button, Form} from "react-bootstrap";
import React, {useState, useEffect} from "react";

import baseRequest from "../requests/requests";


const Step2Page = ({history}) => {
  const [size, setSize] = useState(0)
  const [options, setOptions] = useState([])
  const [suggestion, setSuggestion] = useState(1)

  useEffect(() => {
    (async () => {
      const res = await baseRequest('/getSize')
      const res2 = await baseRequest('/getSuggestion')
      setSuggestion(res2.data)
      setOptions(res.data)
    })()
  }, [size])
  return (
    <Form id="sizeForm" onSubmit={(a) => {
      a.preventDefault()
      console.log(a.currentTarget)
    }}>
      <Form.Group controlId="sizeFormGroup">
        <Form.Label>Selecione o tamanho </Form.Label>
        <Form.Control as="select" onChange={(e) => setSize(e.target.value)}>
          {Array.isArray(options) && options.map((item, index) => <option value={index} key={index}>{item}</option>)}
        </Form.Control>
      </Form.Group>
      <Button onClick={() => baseRequest("/getPoints").then(({data}) => alert(data))}>Recomendação do
        Milenio: {options[suggestion]}</Button>
      <Button onClick={() => history.push("/3")}>Proximo passo</Button>

    </Form>
  )
}
export default Step2Page

