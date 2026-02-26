param(
    [string]$Path = ".",
    [int]$Level = 2,
    [string[]]$Ignore = @("node_modules", "out", "dist", "build", ".vscode-test")
)

function Show-Tree {
    param(
        [string]$Path,
        [int]$Level,
        [string[]]$Ignore
    )

    if ($Level -lt 0) { return }

    $items = Get-ChildItem -Path $Path | Where-Object { $Ignore -notcontains $_.Name }

    foreach ($item in $items) {
        Write-Host ($item.FullName)
        if ($item.PSIsContainer) {
            Show-Tree -Path $item.FullName -Level ($Level - 1) -Ignore $Ignore
        }
    }
}

Show-Tree -Path $Path -Level $Level -Ignore $Ignore