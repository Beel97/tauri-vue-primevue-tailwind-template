#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn info() -> String {
    // Puedes eliminar esta función; solo sirve como ejemplo para mostrar cómo agregar un nuevo comando
    r#"Español:
Esta es una plantilla base que incluye todo lo necesario para comenzar proyectos con Tauri y Rust, integrando Vue, Tailwind CSS y componentes de PrimeVue.
Puedes personalizarla según tus necesidades. Para más información sobre cómo usarla o configurarla, consulta el archivo README.md.

English:
This is a base template that includes everything you need to start projects with Tauri and Rust, integrating Vue, Tailwind CSS, and PrimeVue components.
You can customize it to fit your needs. For more details on how to use or configure it, check the README.md file."#.to_string()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
