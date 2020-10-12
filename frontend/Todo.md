### frontend/src/Components/Pagination/Pagination.tsx

- [ ] line(39): move to `useMemo` outside the JSX

### frontend/src/Components/ProgressBar/ProgressBar.tsx

- [ ] line(45): what if the value `< 0` or `> 100`

### frontend/src/Components/SettingsButton/SettingsButton.tsx

- [ ] `useMemo` for `settings.map`

### frontend/src/Components/SettingsSidebar/SettingsSidebar.tsx

- [ ] repeated code. move `listItems` to `object`

### frontend/src/Components/Switch/Switch.tsx

- [ ] line(29): `useMemo` for `withStyles`

### frontend/src/Components/TableComponents/TablePaginationActions.tsx

- [ ] line(35): what if the `page < 0`
- [ ] line(39): what if the `page > Math.max(0, Math.ceil(count / rowsPerPage) - 1))`

### Component to fix:

#### Components
1. Table - useMemo, ask David what to change
2. SettingsButton
3. SettingsSidebar
