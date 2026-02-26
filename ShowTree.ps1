param (
    [string]$Path = (Get-Location),
    [int]$Level = 2
)

function Show-Tree {
    param (
        [string]$CurrentPath,
        [int]$CurrentLevel,
        [string]$Prefix = ""
    )

    if ($CurrentLevel -lt 0) { return }

    $items = Get-ChildItem -LiteralPath $CurrentPath
    $count = $items.Count
    $i = 0

    foreach ($item in $items) {
        $i++
        $isLast = $i -eq $count

        if ($isLast) {
            $branch = "+- "
            $newPrefix = "$Prefix   "
        } else {
            $branch = "|- "
            $newPrefix = "$Prefix|  "
        }

        if ($item.PSIsContainer) {
            Write-Host "$Prefix$branch$item" -ForegroundColor Cyan
            Show-Tree -CurrentPath $item.FullName -CurrentLevel ($CurrentLevel - 1) -Prefix $newPrefix
        } else {
            Write-Host "$Prefix$branch$item" -ForegroundColor White
        }
    }
}

Show-Tree -CurrentPath $Path -CurrentLevel $Level