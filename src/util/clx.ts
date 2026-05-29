export const clx = (...classes : (string|undefined|false)[]) : string => {
    return classes.filter(Boolean).join(" ")
}

// the return type of filter is array with join we can return string