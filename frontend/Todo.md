### frontend/src/Components/Alert/Alert.tsx

- [ ] line(6): move React.HTMLAttributes & {custom props} to override the default
- [ ] line(33): use classNames from clasnames npm package
- [ ] line(33): don't mutate props, create new className variable
- [ ] line(36): don't use classes with UpperCase, .Alert should be .alert
- [ ] line(36): don't use short component names: `BootstrapAlert` instead of `A`
- [ ] line(55): don't use as unknown

### frontend/src/Components/Alert/index.tsx

- [ ] use export  {TopAlert as TA, FixedTopAlert as FTA} not export const...

### frontend/src/Components/Badge/Badge.tsx

- [ ] line(4): use `size` property instead of small,medium...
- [ ] line(23): while using `size` property you dont need the if(small), it's should be `.alert-sm = .alert.w-h-1`

### frontend/src/Components/Breadcrumbs

- [ ] useMemo for building links and depends on links property

### frontend/src/Components/Button

- [ ] don't use css camel-case
- [ ] use classNames instead of merged strings

### frontend/src/Components/ButtonDropDown

- [ ] toggle function depends on previous state and should call setOpen((prev) => !prev)
- [ ] use `BootstrapButtonDropdown` instead of `ButtonDropdown` and export `ButtonDropdown` not `ButtonDropDown`

### frontend/src/Components/DatePicker/DatePicker.tsx

- [ ] move the `import "react-datepicker/dist/react-datepicker.css";` to `DatePicker.scss`
- [ ] line(28): calculate the `startDate?.toString()` outside JSX, and dont not display empty div if `startDate` is null
- [ ] line(33): calling `new Date` without calling the constructor, should be `new Date()`
- [ ] line(34): use `===` instead of `==`
- [ ] use default values in declaration
- [ ] remove `types.tsx` if it's empty

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

### frontend/src/Components/FilterButton/FilterButton.tsx

- [ ] line(41): move `items.map` to `useMemo`

### frontend/src/Components/FilterInput/FilterInput.tsx

- [ ] remove `FilterInput.scss` if it's empty
- [ ] line(46): `visible` should be const and calulcate it with `useMemo` that depends on `[filterTypes, placeholder]`
- [ ] line(46): use '===' instead of '=='
- [ ] line(49): use `classNames` like this:
  ```jsx
    <form className={classNames({
      [classes.root]: visible,
      [classes.hile]: !visible,
    })}>
  ```
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

### frontend/src/Components/Image/Image.tsx

- [ ] use dashed className
- [ ] empty components should be removed

### frontend/src/Components/InputElement/InputElement.tsx

- [ ] remove the `import { type } from 'os'` not working in browsers
- [ ] destruct props inside the function
- [ ] label should be optional
- [ ] add option to placeholder
- [ ] don't use `setState` in props, use `onChange` with `htmlInputEvent`

### frontend/src/Components/List/List.tsx

- [ ] `right / left` props, use default values outside jsx
- [ ] line(6): don't your `JSX.Element` use `React.ReactElement`
- [ ] line(39): `{...props}` will add the `props.children` to the `<Base>` component

### frontend/src/Components/NavBar/NavBar.tsx

- [ ] create `Props` interface and move the `NavBar types` outside the declaration.
- [ ] line(21): `toggleDrawer` should toggle the state. use `setDrawerOpen(open: boolean)` instead.
- [ ] line(29): img `src` attribute should be imported or absolute url

### frontend/src/Components/Notification/Notification.tsx

- [ ] remove empty component

### frontend/src/Components/Pagination/Pagination.tsx

- [ ] use `React.Element` instead of `JSX.Element`
- [ ] use `classNames`
- [ ] line(39): move to `useMemo` outside the JSX

### frontend/src/Components/ProgressBar/ProgressBar.tsx

- [ ] use `classNames`
- [ ] line(45): what if the value `< 0` or `> 100`

### frontend/src/Components/ProjectStatusComponent/ProjectStatustsx

- [ ] line(31): remove `alt` property or set the right text

### frontend/src/Components/RegularTableComponent/RegularTabletsx

- [ ] very long component
- [ ] move helpers to separate file
- [ ] split the inner components to separate files
- [ ] fix freeSearch method (same in DataTableComponent)

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

### MISC

* Choose createStyles or scss file
* Why NotificationContext is in Pages/MainLayout
