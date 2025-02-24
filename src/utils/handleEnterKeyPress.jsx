export default function handleEnterKeyPress(e, onSubmit){
    if (e.key === 'Enter') {
        onSubmit();
    }
}