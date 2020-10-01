### frontend/src/Components/ButtonDropDown/ButtonDropDown.tsx

- [ ] toggle function depends on previous state and should call setOpen((prev) => !prev)

### frontend/src/Components/DatePicker/DatePicker.tsx

- [ ] line(28): calculate the `startDate?.toString()` outside JSX, and dont not display empty div if `startDate` is null
- [ ] line(33): calling `new Date` without calling the constructor, should be `new Date()`
- [ ] use default values in declaration

### frontend/src/Components/DefaultForm/DefaultForm.tsx

- [ ] is there other types of form? it not, use `Form.tsx` and not `DefaultForm.tsx`
- [ ] move `input.map` outside jsx and useMemo and depends on the related props
- [ ] split the `input.map` to separate components, the jsx is complex
- [ ] line(15): destruct props inside the function
- [ ] line(24): use classnames instead of concatenate strings

### frontend/src/Components/DefaultForm/types.tsx

- [ ] extract `IField` `options` property to separate interface and don't use `{...}[]` it should be `IFieldOptions[]`.
- [ ] remove `undefined` from `validType` the optional `?` do it for you.

### frontend/src/Components/Dropdown/Dropdown.tsx

- [ ] add `React.HTMLAttributes<HTMLElement>` to the main `Props`, and remove it the component declaration.
- [ ] line(45): you don't need to pass `props.children` and `children`, and `{...props}` do it for you.

### frontend/src/Components/FilterInput/FilterInput.tsx

- [ ] line(53): add option to change the label, and set the default value `'Search ${placeholder}'`

### frontend/src/Components/FormSteps/FormSteps.scss

- [ ] don't use ids in css
- [ ] line(9): fix typo `.activ`
- [ ] line(42): `.stepnumber` should be `.step-number`
- [ ] line(56): multiple `.step` inside single css file

### frontend/src/Components/FormSteps/FormSteps.tsx

- [ ] line(6): move `React.HTMLAttributes<HTMLElement>` to the first
- [ ] move `props` to `./types.tsx` file
- [ ] use `classNames`
- [ ] remove redundant comments and unused imports

### frontend/src/Components/List/List.tsx

- [ ] `right / left` props, use default values outside jsx
- [ ] line(6): don't your `JSX.Element` use `React.ReactElement`
- [ ] line(39): `{...props}` will add the `props.children` to the `<Base>` component

### frontend/src/Components/Pagination/Pagination.tsx

- [ ] use `React.Element` instead of `JSX.Element`
- [ ] use `classNames`
- [ ] line(39): move to `useMemo` outside the JSX

### frontend/src/Components/ProgressBar/ProgressBar.tsx

- [ ] use `classNames`
- [ ] line(45): what if the value `< 0` or `> 100`

### frontend/src/Components/ProjectStatusComponent/ProjectStatus.tsx

- [ ] line(31): remove `alt` property or set the right text

### frontend/src/Components/RegularTableComponent/RegularTable.tsx

- [ ] very long component
- [ ] move helpers to separate file
- [ ] split the inner components to separate files
- [ ] fix freeSearch method (same in DataTable)

### frontend/src/Components/SampleFrom/SampleFrom.tsx

- [ ] complex JSX code
- [ ] use `classNames`
- [ ] duplicated IField interface

### frontend/src/Components/SettingsButton/SettingsButton.tsx

- [ ] `useMemo` for `settings.map`
- [ ] destruct props inside the function

### frontend/src/Components/SettingsSidebar/SettingsSidebar.tsx

- [ ] repeated code. move `listItems` to `object`

### frontend/src/Components/Slider/Slider.tsx

- [ ] destruct props inside the function
- [ ] `React.ReactElement` instead of `JSX.Element`
- [ ] line(24): what is the purpose of `50`? if it's for demo, move it the constant variable outside the component.
- [ ] make header and description optional, remove divs if props are empty
- [ ] use `MaterialSlider` instead of `Sliders` and export as `Slider`

### frontend/src/Components/Switch/Switch.tsx

- [ ] destruct props inside the function
- [ ] line(29): `useMemo` for `withStyles`
- [ ] line(45): use `classNames`

### frontend/src/Components/Tab/Tab.tsx

- [ ] destruct props inside the function
- [ ] use dashed className
- [ ] line(11): extract the TabItem to separate file
- [ ] line(14): use `classNames`
- [ ] line(44): `DefaultTab`, long and complex jsx

### frontend/src/Components/TableComponents/TablePaginationActions.tsx

- [ ] line(35): what if the `page < 0`
- [ ] line(39): what if the `page > Math.max(0, Math.ceil(count / rowsPerPage) - 1))`

### frontend/src/Components/Typography/Typography.tsx

- [ ] empty component should be removed

### frontend/src/Components/Sidebar/Sidebar.tsx

- [ ] change li-darkMod css

### frontend/src/Pages/MainLayout/MainLayout.tsx

- [ ] use defined alerts
- [ ] rewrite code

### MISC

* Choose createStyles or scss file
* Choose type or interface for component props
* Why NotificationContext is in Pages/MainLayout


### Component to fix:

#### Components
1. Table - useMemo, ask David what to change
2. DefaultForm
3. FormSteps
4. Pagination
5. Tab
6. Sidebar - check scss themify
7. SidebarCategory
8. SampleForm
9. Slider
16. NotificationContext
10. SettingsSidebar
11. SettingsButton

#### Pages/MainLayout
1. MainLayout
2. DatatablePage
3. DatePickerPage
4. DefaultFormPage
5. FormStepsPage
6. RegularTablePage
7. SampleFormPage
8. SidebarCategoryTablePage
9. SliderPage
10. SwitchPage
11. UIScreenPage
12. ValidationFormPage
13. Widget
14. Dashboard
