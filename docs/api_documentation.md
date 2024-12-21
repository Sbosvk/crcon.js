# API Module Documentation

## Overview

This module provides a wrapper around various API endpoints, facilitating interaction with the backend. Each method corresponds to an API endpoint and uses the fetch API to perform HTTP requests.

This version is fully compatible with the CRCON v10 API, ensuring all current features and endpoints are supported.

## Constructor

### `constructor(baseURL, config = {})`

#### **Parameters**

- **`baseURL`** (string): The base URL of the API.
- **`config`** (object, optional): Configuration options for the API instance.
  - **`token`** (string, optional): A bearer token for authentication. If set, this token will be used for all API calls.

## Methods

### Format:

General return structure of all methods:

**With debugging:**

```json
{
    "result": object | Array<object> | string | number | boolean | null,
    "command": string,
    "arguments": object,
    "failed": boolean,
    "error": null | string,
    "forward_results": null | object,
    "version": string
}
```

**Standard**
```json
{
    object | Array<object> | string | number | boolean | null
}
```

### Admin Management

#### `add_admin`
Add a new admin to the game server(s).

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)
- `role` (string) (default: null)
- `description` (string, optional) (default: null)

**Returns:** `boolean`

---

#### `remove_admin`
Remove an admin from the game server.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)

**Returns:** `boolean`

---

#### `get_admin_groups`
Get a list of game server admin groups.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<string>`

**Return Example:**
```json
{
    "result": [
        "owner",
        "senior",
        "junior",
        "spectator"
    ]
}
```

---

#### `get_admin_ids`
Returns a list of server admins (all roles).

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

**Return Example:**

```json
{
    "result": [
        {
            "player_id": "123123123123123",
            "name": "John Doe",
            "role": "Owner"
        },
        {
            "player_id": "321321321321321",
            "name": "Jane Doe",
            "role": "Spectator"
        }
    ]
}
```

---

#### `get_ingame_mods`
Get a list of ingame mods.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_online_mods`
Get a list of online CRCON mods.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

**Return Example:**

```json
{
    "result": [
        {
            "username": "JohnDoe",
            "player_id": "123123123123123"
        }
    ]
}
```

---

### Logs

#### `describe_log_line_webhook_config`
Both native (from the game server) and synthetic (created by CRCON) log types.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_log_stream_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_audit_logs`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_audit_logs_autocomplete`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `usernames`: `Array<string>`
- `commands`: `Array<string>`

---

#### `get_historical_logs`
No description provided.

**Supports HTTP methods:** GET, POST

**Parameters:**
- `player_name` (string, optional) (default: null)
- `player_id` (string, optional) (default: null)
- `action` (string, optional) (default: null)
- `limit` (integer, optional) (default: 1000)
- `from_` (any, optional) (default: null)
- `till` (any, optional) (default: null)
- `time_sort` (any, optional) (default: desc)
- `exact_player_match` (boolean, optional) (default: False)
- `exact_action` (boolean, optional) (default: True)
- `server_filter` (string, optional) (default: null)

**Returns:** `Array<object>` with the following properties:
- `id`: `<Integer>`
- `version`: `<Integer>`
- `creation_time`: `<string>`
- `event_time`: `<string>`,
- `type`: `<string>`,
- `player1_name`: `<null | String>`,
- `player1_id`: `<null | String>`,
- `player2_name`: `<null | String>`,
- `player2_id`: `<null | String>`,
- `raw`: `<string>`,
- `content`: `<string>`,
- `server`: `<string>`,
- `weapon`: `<null | String>`

---

#### `get_historical_logs_csv`
Not supported by this interface.

---

#### `get_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `webhooks`: `Array<object>`

---

#### `get_log_stream_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

**Return Example:**

```json
    {
        "result": {
            "enabled": boolean,
            "stream_size": integer,
            "startyp_since_mins": integer,
            "refresh_frequency_sec": integer,
            "refresh_since_mins": integer
        }
    }
```

---

#### `get_logs`
Returns raw text logs from the game server with no parsing performed

You most likely want to use a different method/endpoint to get parsed logs.

**Supports HTTP methods:** GET

**Parameters:**
- `since_min_ago` (string) (default: null): A numeric value in string format representing the number of minutes ago to fetch logs.
- `filter_` (string, optional) (default: null)
- `by` (string, optional) (default: null)

**Returns:** `string`

---

#### `get_recent_logs`
No description provided.

**Supports HTTP methods:** GET, POST

**Parameters:**
- `filter_player` (string, optional) (default: null)
- `filter_action` (string, optional) (default: null)
- `inclusive_filter` (boolean, optional) (default: True)
- `start` (integer, optional) (default: 0)
- `end` (integer, optional) (default: 10000)
- `exact_player_match` (boolean, optional) (default: True)
- `exact_action` (boolean, optional) (default: False)

**Returns:** `object`

---

#### `get_structured_logs`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `since_min_ago` (string | integer) (default: null): Expects a numeric value.
- `filter_action` (string, optional) (default: null)
- `filter_player` (string, optional) (default: null)

**Returns:** `object`

---

#### `set_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_log_stream_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_log_line_webhook_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

#### `validate_log_stream_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

### **Auto Moderation**

#### `describe_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `describe_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `get_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_broadcast.AutoBroadcastUserConfig'>`

---

#### `get_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_level.AutoModLevelUserConfig'>`

---

#### `get_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_no_leader.AutoModNoLeaderUserConfig'>`

---

#### `get_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_seeding.AutoModSeedingUserConfig'>`

---

#### `get_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `<class 'rcon.user_config.auto_mod_solo_tank.AutoModNoSoloTankUserConfig'>`

---

#### `get_auto_settings`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `set_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `user_config` (any) (default: null)
- `reset_to_default` (boolean) (default: False)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

#### `set_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_auto_settings`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `validate_auto_broadcasts_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_auto_mod_level_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_auto_mod_no_leader_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_auto_mod_seeding_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_auto_mod_solo_tank_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_autobalance_enabled`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (boolean) (default: null)

**Returns:** `boolean`

---

#### `set_autobalance_threshold`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `max_diff` (integer) (default: null)

**Returns:** `boolean`

---

### **Kicks, Bans & Blacklists**

**Bans**:
Bans are records stored on server config.

**Blacklists**:
Blacklists are collections of ban-like records stored by CRCON
to provide greater flexibility and scalability.
Recommend to use blacklists over bans when possible as they are more flexible and versatile.

#### `describe_name_kick_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_idle_autokick_time`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_max_ping_autokick`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_name_kick_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_votekick_enabled`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `boolean`

---

#### `get_votekick_thresholds`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `array`

---

#### `kick`
Kick selected player.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: null)
- `reason` (any) (default: null)
- `by` (string, optional) (default: null)
- `player_id` (string, optional) (default: null)

**Returns:** `boolean`

---

#### `reset_votekick_thresholds`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `boolean`

---

#### `set_idle_autokick_time`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `minutes` (integer | string) (default: null): Expects numeric value.

**Returns:** `boolean`

---

#### `set_max_ping_autokick`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `max_ms` (integer | string) (default: null): Expects numeric value.

**Returns:** `boolean`

---

#### `set_name_kick_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_votekick_enabled`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (boolean) (default: null)

**Returns:** `boolean`

---

#### `set_votekick_thresholds`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `threshold_pairs` (any) (default: null)

**Returns:** `string | boolean`

---

#### `validate_name_kick_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_votekick_autotoggle_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `describe_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_ban`
get all bans from player_id
@param player_id: steam_id_64 or windows store ID of a user
@return: a array of bans

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string | integer) (default: null): Expects numeric value.

**Returns:** `Array<object>`

---

#### `get_bans`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_perma_bans`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_temp_bans`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `perma_ban`
Permanently ban a player by player name or player ID.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any, optional) (default: null)
- `player_id` (any, optional) (default: null)
- `reason` (any, optional) (default: "")
- `by` (any, optional) (default: "")

**Returns:** `boolean`

---

#### `remove_perma_ban`
Remove a perma ban by ban log. Note that a player ID is a valid ban log.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)

**Returns:** `boolean`

---

#### `remove_temp_ban`
Remove a temp ban by player ID or game server ban log.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)

**Returns:** `boolean`

---

#### `set_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `temp_ban`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (string, optional) (default: null)
- `player_id` (string, optional) (default: null)
- `duration_hours` (integer, optional) (default: 2)
- `reason` (string, optional) (default: null)
- `by` (string, optional) (default: null)

**Returns:** `boolean`

---

#### `unban`
Remove all temporary and permanent bans from the player_id.

This does not remove any blacklists, meaning the player may be immediately banned
again. To remove any bans or blacklists, use `unblacklist_player` instead.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null): steam_id_64 or windows store ID

**Returns:** `boolean`

---

#### `validate_tk_ban_on_connect_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_vac_game_bans_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `add_blacklist_record`
Adds a new record to a blacklist.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null): steam_id_64 or windows store ID to blacklist.
- `blacklist_id` (integer) (default: null): The ID of the blacklist to use.
- `reason` (string) (default: null): The reason the player was blacklisted for.
- `expires_at` (any, optional) (default: null): When the blacklist should expire, if ever.
- `admin_name` (string, optional) (default: <API Key User>): The person/tool that is blacklisting the player.

**Returns:** `object` of record details.

---

#### `create_blacklist`
Creates a new, empty blacklist.

**Supports HTTP methods:** POST

**Parameters:**
- `name` (string) (default: null): Name for the list
- `sync` (string, optional) (default: "KICK_ONLY"): Method to use for synchronizing an active record with the game server.
- `servers` (Array<integer | string>, optional) (default: null): A sequence of server numbers which this blacklist will apply to. `None` means all servers.

**Returns:** `object` of blacklist details.

---

#### `delete_blacklist`
Removes a blacklist alongside all of its records.

**Supports HTTP methods:** POST

**Parameters:**
- `blacklist_id` (integer) (default: null): The ID of the blacklist to delete.

**Returns:** `boolean`

---

#### `delete_blacklist_record`
Removes a blacklist record.

**Supports HTTP methods:** POST

**Parameters:**
- `record_id` (integer) (default: null)

**Returns:** `boolean`

---

#### `edit_blacklist`
Edits a blacklist.

**Supports HTTP methods:** POST

**Parameters:**
- `blacklist_id` (integer) (default: null): The ID of the blacklist to edit.
- `name` (string) (default: null): The name of the blacklist.
- `sync_method` (any) (default: null): The method to use for synchronizing records with the game server.
- `servers` (any) (default: null): A sequence of server numbers which this blacklist will apply to. `None` means all servers.

**Returns:** `None`

---

#### `edit_blacklist_record`
Edits a blacklist record.

The blacklisted player ID cannot be edited. You instead need to
delete this record and create a new one.

**Supports HTTP methods:** POST

**Parameters:**
- `record_id` (integer) (default: null): The ID of the record to edit.
- `blacklist_id` (integer, optional) (default: null): The ID of the blacklist this record should be part of.
- `reason` (string, optional) (default: null): The reason the player was blacklisted for.
- `expires_at` (any, optional) (default: null): When the blacklist should expire, if ever.

**Returns:** `boolean`

---

#### `get_blacklist`
Get a blacklist and its respective records.

**Supports HTTP methods:** GET

**Parameters:**
- `blacklist_id` (integer) (default: null): The ID of the blacklist to get.

**Returns:** `object`

**Return Example:**
```json
{
    id: 0,
    name: 'Default',
    sync: 'kick_only',
    servers: null
    records: [
        {
        id: 1,
        player_id: '123123123123123',
        reason: 'Toxic language',
        admin_name: 'Cool Guy',
        created_at: '2024-08-23T16:10:17.260715+00:00',
        expires_at: null,
        is_active: true
        }
    ]
}
```

---

#### `get_blacklist_records`
Get all blacklist records.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: null)
- `reason` (string) (default: null)
- `blacklist_id` (integer) (default: null)
- `exclude_expired` (boolean) (default: False)
- `page_size` (integer) (default: 50)
- `page` (integer) (default: 1)

**Returns:** `object` with the following properties:
- `records`: array<object>

---

#### `get_blacklists`
Get all blacklists.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `unblacklist_player`
Expires all blacklists of a player and unbans them from all servers.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null): steam_id_64 or windows store ID

**Returns:** `boolean`

---

### **Player Management**

**Flags:**
Flags are used to label users and some tools use the flags to whitelist
users. They are traditionally an emoji (the frontend uses an emoji picker)
but there is no length restriction in the database.

#### `flag_player`
Adds a new flag to the specified player_id

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null): steam_id_64 or windows store ID.
- `flag` (string) (default: null): The flag to add.
- `player_name` (string, optional) (default: null): The players name which will be added as an alias.
- `comment` (string, optional) (default: null)

**Returns:** `object` with flag parameters.

---

#### `get_detailed_player_info`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_name` (string) (default: null)
- `player` (any) (default: null)

**Returns:** `object`

---

#### `get_detailed_players`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `players`: `object`
- `fail_count`: `integer`

---

#### `get_player_comments`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: null)

**Returns:** `Array<object>`

---

#### `get_player_info`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_name` (string) (default: null)
- `can_fail` (any, optional) (default: False)

**Returns:** `object`

---

#### `get_player_messages`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: null)

**Returns:** `Array<object>`

---

#### `get_player_profile`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `player_id` (string) (default: null)
- `num_sessions` (integer, optional) (default: 10)

**Returns:** `object` with the following properties:
- `id`: `integer`,
- `player_id`: `string`,
- `created`: `string`,
- `names`: `array`,
- `sessions`: `array`,
- `sessions_count`: `integer`,
- `total_playtime_seconds`: `integer`,
- `current_playtime_seconds`: `integer`,
- `received_actions`: `array`,
- `penalty_count`: `object`,
- `blacklists`: `array`,
- `is_blacklisted`: `boolean`,
- `flags`: `array`,
- `watchlist`: `null | array`,
- `steaminfo`: `object`,
- `vips`: `array`,
- `bans`: `array`,
- `comments`: `array`

---

#### `get_playerids`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `as_dict` (boolean, optional) (default: False)

**Returns:** `{ [key: string]: string } | Array<[string, string]>`

---

#### `get_players`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_players_history`
No description provided.

**Supports HTTP methods:** GET, POST

**Parameters:**
- `page` (integer, optional) (default: 1)
- `page_size` (integer, optional) (default: 500)
- `last_seen_from` (string, optional) (default: null)
- `last_seen_till` (string, optional) (default: null)
- `player_id` (string, optional) (default: null)
- `player_name` (string, optional) (default: null)
- `blacklisted` (boolean, optional) (default: null)
- `is_watched` (boolean, optional) (default: null)
- `exact_name_match` (boolean, optional) (default: False)
- `ignore_accent` (boolean, optional) (default: True)
- `flags` (string | Array<string>, optional) (default: null)
- `country` (string, optional) (default: null)

**Returns:** `object` with the following properties:
- `total`: `integer`,
- `players`: `Array<object>`,
- `page`: `integer`,
- `page_size`: `integer`

---

#### `post_player_comment`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)
- `comment` (string) (default: null)
- `by` (string, optional) (default: <API Key User>)

**Returns:** `None`

---

#### `punish`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (string) (default: null)
- `reason` (string) (default: null)
- `by` (string, optional) (default: <API Key User>)

**Returns:** `boolean`

---

#### `switch_player_now`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (string) (default: null)

**Returns:** `boolean`

---

#### `switch_player_on_death`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: null)
- `by` (any, optional) (default: <API Key User>)

**Returns:** `boolean`

---

#### `unflag_player`
Flags can be removed either by flag_id (database key) or by passing a player ID and flag

**Supports HTTP methods:** POST

**Parameters:**
- `flag_id` (integer, optional) (default: null): The database primary key of the flag record to delete.
- `player_id` (string, optional) (default: null): steam_id_64 or windows store ID.
- `flag` (string, optional) (default: null): The flag to remove from player if present

**Returns:** `object` with flag parameters.

---

#### `unwatch_player`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (integer | string) (default: null)

**Returns:** `boolean`

---

#### `watch_player`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)
- `reason` (string) (default: null)
- `by` (string) (default: null)
- `player_name` (string, optional) (default: null)

**Returns:** `boolean`

---

### **Messaging**

#### `message_player`
Send ingame admin message to a player.

Requires `player_id` or `player_name`.

**Supports HTTP methods:** POST

**Parameters:**
- `player_name` (any) (default: null)
- `player_id` (any) (default: null)
- `message` (string) (default: null)
- `by` (string) (default: <API Key User>)
- `save_message` (boolean) (default: False)

**Returns:** `string`

---

#### `add_message_template`
Add a new message template and return the ID of the new record

**Supports HTTP methods:** POST

**Parameters:**
- `title` (string) (default: null)
- `content` (string) (default: null)
- `category` (any) (default: null)
- `by` (string) (default: null)

**Returns:** `integer`

---

#### `delete_message_template`
Delete a specific message template

**Supports HTTP methods:** POST

**Parameters:**
- `id` (integer) (default: null)

**Returns:** `boolean`

---

#### `describe_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `edit_message_template`
Add a new message template and return the ID of the new record

**Supports HTTP methods:** POST

**Parameters:**
- `id` (integer) (default: null)
- `title` (string, optional) (default: null)
- `content` (string, optional) (default: null)
- `category` (string | rcon.types.MessageTemplateCategory) (default: null)
- `by` (string) (default: <API Key User>)

**Returns:** `null`

---

#### `get_all_message_templates`
Get all message templates by category

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

**Return Example:**

```json
{
    "BROADCAST": [],
    "MESSAGE": [],
    "REASON": [],
    "WELCOME": []
}
```

---

#### `get_all_standard_message_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

**Return Example:**

```json
{
    "StandardWelcomeMessagesUserConfig": {
        "messages": []
    },
    "StandardBroadcastMessagesUserConfig": {
        "messages": []
    },
    "StandardPunishmentMessagesUserConfig": {
        "messages": []
    }
},
```

---

#### `get_broadcast_message`
Returns the current broadcast message if the cache is set.

There is no RCON command to get the current broadcast message so it can only
be retrieved if it was set by CRCON and the cache has not expired.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `str | bytes | None`

---

#### `get_message_template`
Return the message template for the specified record if it exists.

**Supports HTTP methods:** GET

**Parameters:**
- `id` (integer) (default: null)

**Returns:** `object | null`

---

#### `get_message_template_categories`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<string>`

---

#### `get_message_templates`
Get all possible message type categories

**Supports HTTP methods:** GET

**Parameters:**
- `category` (any) (default: null)

**Returns:** `array`

---

#### `get_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `messages`: `Array<object>`

---

#### `get_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `messages`: `Array<object>`

---

#### `get_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `messages`: `Array<object>`

---

#### `get_welcome_message`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `string | null`

---

#### `set_broadcast`
Set the in game broadcast message and return the previous message if set.

**Supports HTTP methods:** POST

**Parameters:**
- `message` (string) (default: null)

**Returns:** `string`

---

#### `set_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: false)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean) (default: false)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

#### `set_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean) (default: false)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

#### `set_welcome_message`
Set the in game welcome (rules) message and return the previous message if set.

**Supports HTTP methods:** POST

**Parameters:**
- `message` (string) (default: null)

**Returns:** `string`

---

#### `validate_standard_broadcast_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean) (default: false)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

#### `validate_standard_punishments_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean) (default: false)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

#### `validate_standard_welcome_messages`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean) (default: false)
- `kwargs` (any) (default: null)

**Returns:** `boolean`

---

### **VIP Management**

#### `add_vip`
Adds VIP status on the game server and adds or updates their PlayerVIP record.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (string) (default: null)
- `description` (string) (default: null)
- `expiration` (string, optional) (default: null)

**Returns:** `boolean`

---

#### `describe_expired_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_real_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_seed_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `download_vips`
Not supported by this interface.

---

#### `get_expired_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_real_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_seed_vip_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_vip_ids`
Get a list of all VIPs.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_vip_slots_num`
Get number of VIP slots.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_vips_count`
Get number of VIPs ingame.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `remove_all_vips`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `boolean`

---

#### `remove_vip`
Removes VIP status on the game server and removes their PlayerVIP record.

**Supports HTTP methods:** POST

**Parameters:**
- `player_id` (any) (default: null)

**Returns:** `boolean`

---

#### `set_expired_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_real_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_seed_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_vip_slots_num`
Set number of VIP slots.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (integer) (default: null)

**Returns:** `boolean`

---

#### `upload_vips`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `upload_vips_result`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `None`

---

#### `validate_expired_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_real_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_seed_vip_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

### **Map Management**

#### `add_map_to_rotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: null)
- `after_map_name` (string, optional) (default: null)
- `after_map_name_number` (integer, optional) (default: null)

**Returns:** `string`

---

#### `add_map_to_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: null)

**Returns:** `None`

---

#### `add_maps_to_rotation`
Add the given maps to the rotation, returns the game server response for each map

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (Array<string>) (default: null)

**Returns:** `Array<[string, string]>`

---

#### `add_maps_to_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (Array<string>) (default: null)

**Returns:** `Array<[string, string]>`

---

#### `describe_votemap_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_current_map_sequence`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<string>`

---

#### `get_map`
Get current map.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

**Return Example:**

```json
{
    "id": "stmariedumont_warfare",
    "map": {
        "id": "stmariedumont",
        "name": "ST MARIE DU MONT",
        "tag": "BRC",
        "pretty_name": "St. Marie Du Mont",
        "shortname": "SMDM",
        "allies": {
            "name": "us",
            "team": "allies"
        },
        "axis": {
            "name": "ger",
            "team": "axis"
        },
        "orientation": "vertical"
    },
    "game_mode": "warfare",
    "attackers": null,
    "environment": "day",
    "pretty_name": "St. Marie Du Mont Warfare",
    "image_name": "stmariedumont-day.webp"
},
```

---

#### `get_map_history`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_map_rotation`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_map_scoreboard`
No description provided.

**Supports HTTP methods:** GET

**Parameters**
- `map_id` (integer) (default: null)

**Returns:** `None`

---

#### `get_map_shuffle_enabled`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `boolean`

---

#### `get_maps`
Get a list of all maps.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_next_map`
Return the next map in the rotation as determined by the gameserver through the gamestate command

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_previous_map`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_votemap_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_votemap_status`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `get_votemap_whitelist`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<string>`

---

#### `remove_map_from_rotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: null)
- `map_number` (integer, optional) (default: null)

**Returns:** `boolean`

---

#### `remove_map_from_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: null)

**Returns:** `boolean`

---

#### `remove_maps_from_rotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (Array<string>) (default: null)

**Returns:** `string`

---

#### `remove_maps_from_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: null)

**Returns:** `boolean`

---

#### `reset_map_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `boolean`

---

#### `reset_votemap_state`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `array`

---

#### `set_map`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_name` (string) (default: null)

**Returns:** `boolean`

---

#### `set_map_shuffle_enabled`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `enabled` (boolean) (default: null)

**Returns:** `boolean`

---

#### `set_maprotation`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: null)

**Returns:** `Array<object>`

---

#### `set_votemap_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_votemap_whitelist`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `map_names` (any) (default: null)

**Returns:** `None`

---

#### `validate_votemap_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string) (default: null)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

### **Server Settings & Status**

#### `clear_cache`
Clear every key in this servers Redis cache.

Many things in CRCON are cached in Redis to avoid excessively polling
the game server, this clears the entire cache which is sometimes necessary
to force a refresh

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** number of deleted keys.

---

#### `describe_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_server_name_change_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_steam_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_connection_info`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_server_list`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `array`

---

#### `get_services`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<object>`

---

#### `do_service`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** UNKNOWN

---

#### `get_steam_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_version`
Get CRCON version.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `string`

---

#### `is_logged_in`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `login`
No description provided.

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** UNKNOWN

---

#### `logout`
No description provided.

**Supports HTTP methods:** GET, POST

**No parameters required.**

**Returns:** UNKNOWN

---

#### `describe_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_camera_notification_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_scorebot_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `describe_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_all_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_camera_notification_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_scorebot_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `set_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_camera_notification_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `reconnect_gameserver`
Restart gunicorn workers which reconnects Rcon endpoint instances

**Supports HTTP methods:** POST

**No parameters required.**

**Returns:** `None`

---

#### `set_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_scorebot_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_server_name`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `name` (string) (default: null)

**Returns:** `None`

---

#### `set_server_name_change_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_admin_pings_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---
#### `validate_audit_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_camera_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---
#### `validate_camera_notification_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---
#### `validate_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---
#### `validate_chat_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_kills_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---


#### `validate_rcon_chat_commands_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---
#### `validate_rcon_connection_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---
#### `validate_rcon_server_settings_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_scorebot_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_server_name_change_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_steam_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `validate_watchlist_discord_webhooks_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `set_steam_config`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `by` (string, optional) (default: <API Key User>)
- `config` (object) (default: null)
- `reset_to_default` (boolean, optional) (default: False)
- `kwargs` (any, optional) (default: null)

**Returns:** `boolean`

---

#### `get_server_name_change_config`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_server_settings`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

### **Game Settings & Status**

#### `get_name`
Get server name.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `string`

---

#### `get_public_info`
Get public game info.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_status`
Get game status.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `ban_profanities`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `profanities` (Array<string>) (default: null)

**Returns:** `boolean`

---

#### `unban_profanities`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `profanities` (any) (default: null)

**Returns:** `boolean`

---

#### `set_profanities`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `profanities` (Array<string>) (default: null)

**Returns:** `Array<string>`

---



#### `get_profanities`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<string>`

---

#### `get_autobalance_enabled`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `boolean`

---

#### `get_autobalance_threshold`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_gamestate`
Returns player counts, team scores, remaining match time and current/next map

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_live_game_stats`
Return stats for the currently playing match

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `snapshot_timestamp`: `float`
- `stats`: `Array<object>`

---

#### `get_live_scoreboard`
Return stats for all currently connected players (stats are reset on disconnect, not match start)

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `snapshot_timestamp`: `float`
- `refresh_interval_sec`: `integer`
- `stats`: `Array<object>`

---

#### `get_date_scoreboard`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `start` (string) (default: null)
- `end` (string) (default: null)

**Returns:** `object`

---

#### `run_raw_command`
No description provided.

**Supports HTTP methods:** GET, POST

**No parameters required.**

**Returns:** `None`

---

#### `get_round_time_remaining`
Returns the amount of time left in the round as seconds

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_scoreboard_maps`
No description provided.

**Supports HTTP methods:** GET

**Parameters:**
- `page` (integer) (default: 1)

**Returns:** `object`

---

#### `get_objective_row`
Get specific objective row for current map. (Array starts at zero)

**Supports HTTP methods:** GET

**Parameters:**
- `row` (integer) (default: null)

**Returns:** `Array<string>`

---

#### `get_objective_rows`
Get all objective rows for current map.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<array>`

---

#### `get_own_user_permissions`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `get_queue_length`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_slots`
Return the current number of connected players and max players allowed

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object` with the following properties:
- `current_players`: `integer`
- `max_players`: `integer`

---

#### `get_team_objective_scores`
Returns the number of objectives held by the allied/axis team respectively

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `Array<integer, integer>`

---

#### `get_team_switch_cooldown`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `integer`

---

#### `get_team_view`
No description provided.

**Supports HTTP methods:** GET

**No parameters required.**

**Returns:** `object`

---

#### `set_game_layout`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `objectives` (Array<string>) (default: null)
- `random_constraints` (integer, optional) (default: 0)

**Returns:** `None`

---

#### `set_queue_length`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `value` (integer) (default: null)

**Returns:** `boolean`

---

#### `set_team_switch_cooldown`
No description provided.

**Supports HTTP methods:** POST

**Parameters:**
- `minutes` (integer) (default: null)

**Returns:** `boolean`

---