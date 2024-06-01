import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function DarkModeToggle({ changeTheme, isChecked }) {
  const [enabled, setEnabled] = useState(false);

  function setEnabledAndChangeTheme() {
    setEnabled(!enabled);
    changeTheme();
  }

  return (
    <Switch
      checked={isChecked}
      onChange={setEnabledAndChangeTheme}
      className='relative inline-flex h-8 w-14 items-center rounded-full ui-checked:bg-white ui-not-checked:bg-primary-color'
    >
      <span className='inline-block h-6 w-6 transform rounded-full transition ui-checked:translate-x-7 ui-checked:bg-bkg ui-not-checked:translate-x-1 ui-not-checked:bg-white' />
    </Switch>
  );
}
