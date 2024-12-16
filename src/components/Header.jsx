
import { Button } from './ui/button'
import { Download } from 'lucide-react'

function Header({DownloadIcon}) {
    return (
        <div className='p-4 bg-amber-300  shadow-sm border flex justify-between items-center'>
            <a href={'/'} className={'flex items-center justify-center'}>
            <img src='/logo-maker.svg' className='w-[30px] '/>
                <span className={'text-2xl text-blue-800 font-bold font-serif'}>LogoFactory</span>
            </a>
            <Button className="flex gap-2 items-center bg-blue-800" onClick={()=>DownloadIcon(Date.now())}>
                <Download className='h-4 w-4'/> Download
            </Button>
        </div>
    )
}

export default Header

