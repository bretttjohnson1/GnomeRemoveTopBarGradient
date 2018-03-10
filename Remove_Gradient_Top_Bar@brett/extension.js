const Main = imports.ui.main;

function init() {
}

function enable() {
    Main.panel.actor.add_style_class_name('panel-gradient');
    Main.panel._leftCorner.actor.add_style_class_name('corner-gradient');
    Main.panel._rightCorner.actor.add_style_class_name('corner-gradient');
}

function disable() {
    Main.panel.actor.remove_style_class_name('panel-gradient');
    Main.panel._leftCorner.actor.remove_style_class_name('corner-gradient');
    Main.panel._rightCorner.actor.remove_style_class_name('corner-gradient');
}
