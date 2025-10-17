import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

type language = 'English' | 'Hindi';

export default function LanguageDropdown() {
    const [language, setLanguage] = useState<language>('English');
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{language}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('English')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('Hindi')}>Hindi</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
