### frontend/src/Components/ButtonDropDown/ButtonDropDown.tsx

- [ ] toggle function depends on previous state and should call setOpen((prev) => !prev)

### frontend/src/Components/DatePicker/DatePicker.tsx

- [ ] line(28): calculate the `startDate?.toString()` outside JSX, and dont not display empty div if `startDate` is null
- [ ] use default values in declaration

### frontend/src/Components/Form/Form.tsx

- [ ] move `input.map` outside jsx and useMemo and depends on the related props
- [ ] split the `input.map` to separate components, the jsx is complex

### frontend/src/Components/List/List.tsx

- [ ] `right / left` props, use default values outside jsx

### frontend/src/Components/Pagination/Pagination.tsx

- [ ] line(39): move to `useMemo` outside the JSX

### frontend/src/Components/ProgressBar/ProgressBar.tsx

- [ ] use `classNames`
- [ ] line(45): what if the value `< 0` or `> 100`


### frontend/src/Components/SettingsButton/SettingsButton.tsx

- [ ] `useMemo` for `settings.map`

### frontend/src/Components/SettingsSidebar/SettingsSidebar.tsx

- [ ] repeated code. move `listItems` to `object`

### frontend/src/Components/Slider/Slider.tsx

- [ ] destruct props inside the function
- [ ] line(24): what is the purpose of `50`? if it's for demo, move it the constant variable outside the component.
- [ ] make header and description optional, remove divs if props are empty

### frontend/src/Components/Switch/Switch.tsx

- [ ] line(29): `useMemo` for `withStyles`

### frontend/src/Components/Tab/Tab.tsx

- [ ] line(11): extract the TabItem to separate file
- [ ] line(44): `DefaultTab`, long and complex jsx

### frontend/src/Components/TableComponents/TablePaginationActions.tsx

- [ ] line(35): what if the `page < 0`
- [ ] line(39): what if the `page > Math.max(0, Math.ceil(count / rowsPerPage) - 1))`


### frontend/src/Components/Sidebar/Sidebar.tsx

- [ ] change li-darkMod css

### frontend/src/Pages/MainLayout/MainLayout.tsx

- [ ] use defined alerts
- [ ] rewrite code


### Component to fix:

#### Components
1. Table - useMemo, ask David what to change
2. SettingsButton - 0.5 hour
3. SettingsSidebar - 2 hours
4. Sidebar - check scss themify

#### Pages/MainLayout - 1 day
1. MainLayout
2. DatatablePage
3. DatePickerPage
4. FormPage
5. Dashboard
6. RegularTablePage
7. UIScreenPage
8. Widget
9. SliderPage
10. SwitchPage

