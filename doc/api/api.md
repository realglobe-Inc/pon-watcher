# pon-watcher@1.0.0

File watcher for pon

+ Functions
  + [create(args)](#pon-watcher-function-create)
+ [`PonWatcher`](#pon-watcher-class) Class
  + [new PonWatcher()](#pon-watcher-class-pon-watcher-constructor)
  + [watcher.watch(filename, handler)](#pon-watcher-class-pon-watcher-watch)

## Functions

<a class='md-heading-link' name="pon-watcher-function-create" ></a>

### create(args) -> `PonWatcher`

Create a PonWatcher instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="pon-watcher-class"></a>

## `PonWatcher` Class

Watcher for pon




<a class='md-heading-link' name="pon-watcher-class-pon-watcher-constructor" ></a>

### new PonWatcher()

Constructor of PonWatcher class



<a class='md-heading-link' name="pon-watcher-class-pon-watcher-watch" ></a>

### watcher.watch(filename, handler) -> `Promise.<function()>`

Watch file

| Param | Type | Description |
| ----- | --- | -------- |
| filename | string | Filename (or glob pattern to watch) |
| handler | function | File watch handler |




