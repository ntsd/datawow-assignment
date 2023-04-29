import React from 'react'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'
import AddTodoBar from '../src/components/AddTodoBar'
import CustomSelect from '../src/components/CustomSelect'
import FilterBar from '../src/components/FilterBar'
import Progress from '../src/components/Progress'
import TodoItem from '../src/components/TodoItem'
import TodoItemList from '../src/components/TodoItemList'
import TodoPage from '../src/components/TodoPage'
import { RecoilRoot } from 'recoil'

function toJSON(component: renderer.ReactTestRenderer) {
	const result = component.toJSON()
	expect(result).toBeDefined()
	return result as renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[]
}

function toTree(component: renderer.ReactTestRenderer) {
	const result = component.toTree()
	expect(result).toBeDefined()
	return result as renderer.ReactTestRendererTree
}

const elements: { [key: string]: React.ReactElement } = {
	"AddTodoBar": <AddTodoBar></AddTodoBar>,
	"CustomSelect": <CustomSelect value='foo' options={['foo', 'bar']} onChange={() => { return }}></CustomSelect>,
	"FilterBar": <FilterBar></FilterBar>,
	"Progress": <Progress></Progress>,
	"TodoItem": <TodoItem todo={{ id: 'foo', completed: false, title: 'bar' }}></TodoItem>,
	"TodoItemList": <TodoItemList></TodoItemList>,
	"TodoPage": <TodoPage></TodoPage>
}

Object.keys(elements).forEach(key => {
	test(`snapshot ${key}`, () => {
		const component = renderer.create(<RecoilRoot>{elements[key]}</RecoilRoot>)
		const tree = toJSON(component)
		expect(tree).toMatchSnapshot()
	})
})

test(`test CustomSelect`, () => {
	const component = renderer.create(<RecoilRoot><CustomSelect value='foo' options={['foo', 'bar']} onChange={() => { return }}></CustomSelect></RecoilRoot>)
	const tree = toTree(component)
	expect(tree).toMatchSnapshot()

	tree.props.value = 'bar'
	expect(tree).toMatchSnapshot()
})

test(`test TodoItem`, () => {
	const component = renderer.create(<RecoilRoot><TodoItem todo={{ id: 'foo', completed: false, title: 'bar' }}></TodoItem></RecoilRoot>)
	const tree = toTree(component)
	expect(tree).toMatchSnapshot()

	tree.props.todo = { id: 'test id', completed: true, title: 'test title' }
	expect(tree).toMatchSnapshot()
})
