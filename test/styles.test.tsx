import React from 'react'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import Checkbox from '../src/styles/Checkbox'
import Container from '../src/styles/Container'
import TodoInput from '../src/styles/TodoInput'
import TodoItemContainer from '../src/styles/TodoItemContainer'

function toJson(component: renderer.ReactTestRenderer) {
	const result = component.toJSON()
	expect(result).toBeDefined()
	return result as renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[]
}

const elements: { [key: string]: React.ReactElement } = {
	"Checkbox": <Checkbox checked={false}>X</Checkbox>,
	"Container": <Container>X</Container>,
	"TodoInput": <TodoInput></TodoInput>,
	"TodoItemContainer": <TodoItemContainer></TodoItemContainer>
}

Object.keys(elements).forEach(key => {
	test(`snapshot ${key}`, () => {
		const component = renderer.create(elements[key])
		const tree = toJson(component)
		expect(tree).toMatchSnapshot()
	})
})

