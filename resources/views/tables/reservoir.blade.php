@include('layouts.header')
<main id="main" class="main">
    <div class="col-xxl-12 col-md-12">
        <div class="card info-card sales-card">
            <div class="card-body">
                <h5 class="card-title">Reservoir <span>| Table</span></h5>
                
                    <table id="reservoirtable" class="table table-hover " style="width:100%;">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Level</th>
                                <th>Cm</th>
                                <th>Status</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody id="reservoirbody">
                        </tbody>
                    </table>
               
            </div>
        </div>
    </div>
    </div>
</main>