import css from "./container.module.css"

export default function Container({ children }) {
    return <div className={css.root}>{children}</div>
}
